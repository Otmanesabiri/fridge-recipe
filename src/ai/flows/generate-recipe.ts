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
  cuisine: z.string().optional().describe('The preferred cuisine style (e.g., French, Italian, Japanese).'),
  dietaryPreferences: z.string().optional().describe('Dietary restrictions or preferences (e.g., vegetarian, vegan, gluten-free).'),
  difficulty: z.string().optional().describe('The desired difficulty level of the recipe (e.g., easy, medium, hard).'),
  maxPrepTime: z.number().optional().describe('Maximum preparation time in minutes.'),
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
      cuisine: z.string().optional().describe('The preferred cuisine style (e.g., French, Italian, Japanese).'),
      dietaryPreferences: z.string().optional().describe('Dietary restrictions or preferences (e.g., vegetarian, vegan, gluten-free).'),
      difficulty: z.string().optional().describe('The desired difficulty level of the recipe (e.g., easy, medium, hard).'),
      maxPrepTime: z.number().optional().describe('Maximum preparation time in minutes.'),
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
  prompt: `You are a chef specializing in creating recipes based on available ingredients and user preferences.

  Generate a list of recipe suggestions based on the following ingredients:

  Ingredients: {{{ingredients}}}

  {{#cuisine}}
  Preferred cuisine style: {{{cuisine}}}
  {{/cuisine}}

  {{#dietaryPreferences}}
  Dietary preferences: {{{dietaryPreferences}}}
  {{/dietaryPreferences}}

  {{#difficulty}}
  Difficulty level: {{{difficulty}}}
  {{/difficulty}}

  {{#maxPrepTime}}
  Maximum preparation time: {{{maxPrepTime}}} minutes
  {{/maxPrepTime}}

  Each recipe should have:
  1. A creative name that reflects the dish
  2. A short appetizing description that mentions the main ingredients and style
  3. Detailed instructions including preparation steps, cooking times, and serving suggestions

  Make sure all recipes:
  - Use the specified ingredients creatively
  - Follow the dietary preferences exactly
  - Match the requested cuisine style when specified
  - Are appropriate for the requested difficulty level
  - Can be prepared within the specified time limit
  - Include approximate preparation and cooking times in the instructions
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
