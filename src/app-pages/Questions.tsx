"use client";

import { useState } from "react";
import { allQuestions, getQuestionsByTheme, themeColors, themeShortNames, themeQuotas } from "@/lib/questions";
import { ChevronDown, ChevronUp, Search, FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Questions() {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const questionsByTheme = getQuestionsByTheme();
  const themes = Object.keys(themeQuotas);

  const toggleQuestion = (id: number) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const expandAll = () => {
    setExpandedQuestions(new Set(allQuestions.map(q => q.id)));
  };

  const collapseAll = () => {
    setExpandedQuestions(new Set());
  };

  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = searchQuery === "" || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.correctAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = selectedTheme === null || q.theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  const groupedFiltered = selectedTheme 
    ? { [selectedTheme]: filteredQuestions }
    : filteredQuestions.reduce((acc, q) => {
        if (!acc[q.theme]) acc[q.theme] = [];
        acc[q.theme].push(q);
        return acc;
      }, {} as Record<string, typeof filteredQuestions>);

  return (
    <>
      <div className="seo-section">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              {allQuestions.length} questions officielles
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Liste Officielle des Questions de l'Examen Civique 2025
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Toutes les questions du Ministère de l'Intérieur organisées par thématique, 
              avec les réponses correctes et explications détaillées.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={expandAll}>
                  Tout afficher
                </Button>
                <Button variant="outline" size="sm" onClick={collapseAll}>
                  Tout masquer
                </Button>
              </div>
            </div>

            {/* Theme Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedTheme(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedTheme === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                Toutes ({allQuestions.length})
              </button>
              {themes.map(theme => {
                const count = questionsByTheme[theme]?.length || 0;
                const style = themeColors[theme];
                return (
                  <button
                    key={theme}
                    onClick={() => setSelectedTheme(theme === selectedTheme ? null : theme)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedTheme === theme
                        ? "bg-primary text-primary-foreground"
                        : cn(style.bg, style.text, "hover:opacity-80")
                    )}
                  >
                    {themeShortNames[theme]} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Questions List */}
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(groupedFiltered).map(([theme, questions]) => {
              if (questions.length === 0) return null;
              const style = themeColors[theme];
              
              return (
                <div key={theme} className="animate-slide-up">
                  <div className={cn("p-4 rounded-t-xl border-b-2", style.bg, style.border)}>
                    <h2 className={cn("text-xl font-bold flex items-center gap-3", style.text)}>
                      {theme}
                      <span className="text-sm font-normal opacity-75">
                        ({questions.length} questions)
                      </span>
                    </h2>
                  </div>
                  
                  <div className="bg-card rounded-b-xl border border-t-0 border-border divide-y divide-border">
                    {questions.map((q, idx) => {
                      const isExpanded = expandedQuestions.has(q.id);
                      
                      return (
                        <div key={q.id} className="p-4">
                          <button
                            onClick={() => toggleQuestion(q.id)}
                            className="w-full text-left flex items-start gap-4 group"
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <p className="font-medium group-hover:text-primary transition-colors">
                                {q.question}
                              </p>
                              {!isExpanded && (
                                <p className="text-sm text-primary mt-1 font-medium">
                                  ✓ {q.correctAnswer}
                                </p>
                              )}
                            </div>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </button>
                          
                          {isExpanded && (
                            <div className="mt-4 ml-12 space-y-3 animate-fade-in">
                              {q.options.map((option, optIdx) => (
                                <div
                                  key={optIdx}
                                  className={cn(
                                    "p-3 rounded-lg text-sm",
                                    option === q.correctAnswer
                                      ? "bg-success/10 border-2 border-success text-success font-medium"
                                      : "bg-muted"
                                  )}
                                >
                                  {option === q.correctAnswer && "✓ "}
                                  {option}
                                </div>
                              ))}
                              <div className="p-3 bg-primary/5 rounded-lg text-sm">
                                <strong className="text-primary">Explication :</strong>{" "}
                                <span className="text-muted-foreground">{q.explanation}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
