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
import {useEffect, useState} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const formSchema = z.object({
  ingredients: z.string().min(2, {
    message: 'Ingredients must be at least 2 characters.',
  }),
});

export default function Home() {
  const [recipes, setRecipes] = useState<
    {name: string; description: string; instructions: string}[]
  >([]);
  const {toast} = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const ingredientsArray = values.ingredients.split(',').map(item => item.trim());
      const generatedRecipes = await generateRecipe({ingredients: ingredientsArray});
      setRecipes(generatedRecipes.recipes);
      toast({
        title: 'Recipes Generated!',
        description: 'Check out the recipes you can make with your ingredients.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message ?? 'Failed to generate recipes. Please try again.',
      });
    }
  };

  useEffect(() => {
    if (form.formState.errors.ingredients) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: form.formState.errors.ingredients.message,
      });
    }
  }, [form.formState.errors, toast]);

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Fridge Chef</CardTitle>
          <CardDescription>
            Enter the ingredients you have in your fridge to generate delicious recipes.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="ingredients"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., chicken, rice, broccoli" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a comma-separated list of ingredients.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Generate Recipes</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {recipes.length > 0 && (
        <div className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Recipe Suggestions</h2>
          <Accordion type="single" collapsible>
            {recipes.map((recipe, index) => (
              <AccordionItem key={index} value={`recipe-${index}`}>
                <AccordionTrigger>{recipe.name}</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>{recipe.name}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea readOnly value={recipe.instructions} className="resize-none" />
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}
