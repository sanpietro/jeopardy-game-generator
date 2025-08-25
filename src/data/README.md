# Jeopardy Question Management

This folder contains the modular question system for the Jeopardy game.

## Demo Data

The current question set (`questionTemplateCV.js`) contains 6 categories of demo data populated from Microsoft Learn Course AI-102T00-A: Develop AI solutions in Azure materials (https://aka.ms/courseai-102). These questions cover Azure AI services including Computer Vision, Document Intelligence, Custom Vision, Face API, Video Indexer, and AI Search.

## Files

- **`questionTemplateCV.js`** - The current question set (Computer Vision-themed questions)
- **`questionTemplate.js`** - A blank template for creating new question sets
- **`../utils/jeopardyUtils.js`** - Utility functions for validation and text parsing

## Creating Your Own Questions

### Method 1: Copy the Template (Easiest)

1. Copy `questionTemplate.js` to a new file (e.g., `myQuestions.js`)
2. Use Copilot to replace the placeholder text with your own categories and questions
3. Update the import in `JeopardyBoard.js` to use your new file:
   ```javascript
   import jeopardyData from './data/myQuestions.js';
   ```

### Method 2: Use the Text Template (No coding required)

1. In your browser console or a Node.js script, run:
   ```javascript
   import { generateTextTemplate } from '../utils/jeopardyUtils.js';
   console.log(generateTextTemplate());
   ```
2. Copy the output and fill in your questions
3. Use the `parseTextTemplate()` function to convert it back to the required format

### Method 3: Create from Scratch

Follow this structure:

```javascript
const myQuestions = [
  {
    category: "Your Category Name",
    clues: [
      {
        value: 100,
        question: "Your clue statement here.",
        answer: "What is your answer?"
      },
      // ... 4 more clues with values 200, 300, 400, 500
    ]
  },
  // ... 2 more categories (3 total)
];

export default myQuestions;
```

## Rules and Guidelines

1. **1-6 categories** - The game board supports 1 to 6 columns (matching the TV show maximum)
2. **Exactly 5 clues per category** - Values must be 100, 200, 300, 400, 500
3. **Category names** - Keep them short (under 20 characters) to fit in the header
4. **Questions** - Write as statements (like real Jeopardy clues)
5. **Answers** - Start with "What is..." or "What are..." (Jeopardy format)
6. **Dynamic columns** - Use the +/- buttons to adjust visible categories during gameplay

## Validation

Use the validation utility to check your questions:

```javascript
import { validateJeopardyData } from '../utils/jeopardyUtils.js';
import myQuestions from './myQuestions.js';

const validation = validateJeopardyData(myQuestions);
if (!validation.isValid) {
  console.log('Errors found:', validation.errors);
}
```

## Examples

### Good Clue Format
```javascript
{
  value: 300,
  question: "This programming language was created by Guido van Rossum in 1991.",
  answer: "What is Python?"
}
```

### Bad Clue Format
```javascript
{
  value: 300,
  question: "What programming language was created by Guido van Rossum?", // Don't use questions
  answer: "Python" // Should be in question format
}
```

## Tips for Non-Technical Users

If you're not comfortable with JavaScript:

1. Ask a developer to run `generateTextTemplate()` and give you the text output
2. Fill out the text template in any text editor
3. Give the completed template back to the developer to parse with `parseTextTemplate()`
4. The developer can then create the JavaScript file for you

This approach allows subject matter experts to create questions without needing to understand the code structure.
