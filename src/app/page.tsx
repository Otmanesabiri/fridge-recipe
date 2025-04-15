'use client';

import {generateRecipe} from '@/ai/flows/generate-recipe';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useToast} from '@/hooks/use-toast';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect, useState, useRef} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Slider} from "@/components/ui/slider";

const formSchema = z.object({
  ingredients: z.string().min(2, {
    message: 'Ingredients must be at least 2 characters.',
  }),
  cuisine: z.string().optional(),
  dietaryPreferences: z.string().optional(),
  difficulty: z.string().optional(),
  maxPrepTime: z.number().default(60).optional(),
});

const ingredientList = [
  'chicken',
  'rice',
  'broccoli',
  'beef',
  'pasta',
  'tomatoes',
  'onions',
  'garlic',
  'potatoes',
  'carrots',
  'spinach',
  'eggs',
  'milk',
  'cheese',
  'bread',
];

const cuisineOptions = [
  { value: 'french', label: 'Française' },
  { value: 'italian', label: 'Italienne' },
  { value: 'japanese', label: 'Japonaise' },
  { value: 'chinese', label: 'Chinoise' },
  { value: 'mexican', label: 'Mexicaine' },
  { value: 'indian', label: 'Indienne' },
  { value: 'thai', label: 'Thaïlandaise' },
  { value: 'mediterranean', label: 'Méditerranéenne' },
  { value: 'american', label: 'Américaine' },
  { value: 'moroccan', label: 'Marocaine' },
];

const dietaryOptions = [
  { value: 'none', label: 'Aucune préférence' },
  { value: 'vegetarian', label: 'Végétarien' },
  { value: 'vegan', label: 'Végétalien' },
  { value: 'gluten-free', label: 'Sans gluten' },
  { value: 'dairy-free', label: 'Sans produits laitiers' },
  { value: 'keto', label: 'Cétogène' },
  { value: 'low-carb', label: 'Faible en glucides' },
];

const difficultyOptions = [
  { value: 'easy', label: 'Facile' },
  { value: 'medium', label: 'Moyen' },
  { value: 'hard', label: 'Difficile' },
];

export default function Home() {
  const [recipes, setRecipes] = useState<
    {name: string; description: string; instructions: string}[]
  >([]);
  const [loading, setLoading] = useState(false);
  const recipesRef = useRef<HTMLDivElement>(null);
  const {toast} = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
      cuisine: 'all',
      dietaryPreferences: 'none',
      difficulty: 'medium',
      maxPrepTime: 60,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const ingredientsArray = values.ingredients.split(',').map(item => item.trim());
      const generatedRecipes = await generateRecipe({
        ingredients: ingredientsArray,
        cuisine: values.cuisine === 'all' ? undefined : values.cuisine,
        dietaryPreferences: values.dietaryPreferences === 'none' ? undefined : values.dietaryPreferences,
        difficulty: values.difficulty || undefined,
        maxPrepTime: values.maxPrepTime !== undefined ? values.maxPrepTime : 60,
      });
      setRecipes(generatedRecipes.recipes);
      toast({
        title: 'Recettes générées !',
        description: 'Découvrez les plats que vous pouvez préparer avec vos ingrédients.',
        className: "bg-gradient-sunset text-white font-modern animate-fade-in",
      });
      
      // Scroll to recipes after they're loaded
      setTimeout(() => {
        if (recipesRef.current) {
          recipesRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: error.message ?? 'Impossible de générer des recettes. Veuillez réessayer.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (form.formState.errors.ingredients) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: form.formState.errors.ingredients.message,
      });
    }
  }, [form.formState.errors, toast]);

  return (
    <div className="min-h-screen bg-mesh-1 dark:bg-mesh-2 bg-fixed bg-cover py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 font-title gradient-text animate-fade-in-down">
          Fridge Chef
        </h1>
        <p className="text-lg md:text-xl text-center mb-12 font-modern text-foreground/80 animate-fade-in">
          Transformez les ingrédients de votre frigo en délicieuses recettes
        </p>

        <Card className="max-w-3xl mx-auto bg-white/80 dark:bg-black/50 shadow-glass hover-card border border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-peach opacity-5 pointer-events-none"></div>
          <CardHeader className="space-y-1 relative z-10">
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
            <CardTitle className="text-3xl font-title">Votre Chef Personnel</CardTitle>
            <CardDescription className="text-lg font-modern">
              Entrez les ingrédients que vous avez dans votre frigo et personnalisez vos préférences culinaires.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="ingredients"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">Ingrédients</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ex: poulet, riz, brocoli"
                          {...field}
                          list="ingredientList"
                          className="h-12 text-lg px-4 bg-background/60 border border-accent/30 focus:border-primary focus:ring-primary/20 transition-all"
                        />
                      </FormControl>
                      <datalist id="ingredientList">
                        {ingredientList.map((ingredient) => (
                          <option key={ingredient} value={ingredient} />
                        ))}
                      </datalist>
                      <FormDescription className="text-sm font-modern">
                        Entrez une liste d'ingrédients séparés par des virgules. Vous pouvez également choisir parmi les suggestions.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="cuisine"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">Cuisine</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 text-lg bg-background/60 border border-accent/30 focus:border-primary focus:ring-primary/20">
                              <SelectValue placeholder="Choisir une cuisine" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="all">Toutes cuisines</SelectItem>
                            {cuisineOptions.map((cuisine) => (
                              <SelectItem key={cuisine.value} value={cuisine.value}>
                                {cuisine.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-sm font-modern">
                          Optionnel - Style de cuisine préféré
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dietaryPreferences"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">Préférences alimentaires</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 text-lg bg-background/60 border border-accent/30 focus:border-primary focus:ring-primary/20">
                              <SelectValue placeholder="Préférences alimentaires" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dietaryOptions.map((diet) => (
                              <SelectItem key={diet.value} value={diet.value}>
                                {diet.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-sm font-modern">
                          Restrictions alimentaires ou régimes spécifiques
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">Niveau de difficulté</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 text-lg bg-background/60 border border-accent/30 focus:border-primary focus:ring-primary/20">
                              <SelectValue placeholder="Niveau de difficulté" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {difficultyOptions.map((difficulty) => (
                              <SelectItem key={difficulty.value} value={difficulty.value}>
                                {difficulty.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-sm font-modern">
                          Niveau de compétence culinaire requis
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="maxPrepTime"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">
                          Temps de préparation maximum: {field.value ?? 60} minutes
                        </FormLabel>
                        <FormControl>
                          <Slider
                            min={10}
                            max={180}
                            step={5}
                            defaultValue={[field.value ?? 60]}
                            onValueChange={(values) => field.onChange(values[0])}
                            className="py-4"
                          />
                        </FormControl>
                        <FormDescription className="text-sm font-modern">
                          Temps maximum souhaité pour la préparation et la cuisson
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-medium bg-gradient-mojito hover:shadow-neon-green transition-all duration-300 animate-fade-in"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-rotate-fast mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Génération...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Générer des Recettes
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {recipes.length > 0 && (
          <div ref={recipesRef} className="mt-16 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold font-title mb-8 text-center gradient-text">
              Suggestions de Recettes
              <div className="w-24 h-1 bg-gradient-candy mx-auto mt-2 rounded-full"></div>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {recipes.map((recipe, index) => (
                <AccordionItem 
                  key={index} 
                  value={`recipe-${index}`}
                  className={`bg-white/80 dark:bg-black/50 shadow-glass-card hover-scale rounded-xl border border-white/20 overflow-hidden`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                    {recipe.name}
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <Card className="border-none shadow-none bg-transparent">
                      <CardHeader>
                        <CardTitle className="font-title text-xl text-primary">{recipe.name}</CardTitle>
                        <CardDescription className="text-base font-modern">{recipe.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-mojito rounded-lg blur opacity-10"></div>
                          <Textarea 
                            readOnly 
                            value={recipe.instructions} 
                            className="resize-none min-h-[200px] p-4 bg-background/60 border border-accent/30 focus:border-primary focus:ring-primary/20 font-modern relative z-10" 
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        <footer className="mt-20 text-center text-sm text-muted-foreground font-modern">
          <p>© 2025 Fridge Chef - Transformez votre cuisine avec l'IA</p>
        </footer>
      </div>
    </div>
  );
}
