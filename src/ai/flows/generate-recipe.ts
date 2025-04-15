// Recipe generation based on available ingredients.
'use server';

/**
 * @fileOverview Recipe generation AI agent.
 *
 * - generateRecipe - A function that handles the recipe generation process.
 * - GenerateRecipeInput - The input type for the generateRecipe function.
 * - GenerateRecipeOutput - The return type for the generateRecipe function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateRecipeInputSchema = z.object({
  ingredients: z.array(z.string()).describe('A list of ingredients available in the fridge.'),
});
export type GenerateRecipeInput = z.infer<typeof GenerateRecipeInputSchema>;

const GenerateRecipeOutputSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe('The name of the recipe.'),
      description: z.string().describe('A short description of the recipe.'),
      instructions: z.string().describe('The instructions to prepare the recipe'),
    })
  ).describe('A list of recipe suggestions.'),
});
export type GenerateRecipeOutput = z.infer<typeof GenerateRecipeOutputSchema>;

export async function generateRecipe(input: GenerateRecipeInput): Promise<GenerateRecipeOutput> {
  return generateRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRecipePrompt',
  input: {
    schema: z.object({
      ingredients: z.array(z.string()).describe('A list of ingredients available in the fridge.'),
    }),
  },
  output: {
    schema: z.object({
      recipes: z.array(
        z.object({
          name: z.string().describe('The name of the recipe.'),
          description: z.string().describe('A short description of the recipe.'),
          instructions: z.string().describe('The instructions to prepare the recipe')
        })
      ).describe('A list of recipe suggestions.'),
    }),
  },
  prompt: `You are a chef specializing in creating recipes based on available ingredients.

  Generate a list of recipe suggestions based on the following ingredients:

  Ingredients: {{{ingredients}}}

  Each recipe should have a name, a short description, and instructions.
  `,
});

const generateRecipeFlow = ai.defineFlow<
  typeof GenerateRecipeInputSchema,
  typeof GenerateRecipeOutputSchema
>({
  name: 'generateRecipeFlow',
  inputSchema: GenerateRecipeInputSchema,
  outputSchema: GenerateRecipeOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
