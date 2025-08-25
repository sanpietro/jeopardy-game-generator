// Utility functions for validating and working with Jeopardy data

/**
 * Validates that the jeopardy data follows the correct structure
 * @param {Array} data - The jeopardy data array to validate
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
export function validateJeopardyData(data) {
  const errors = [];
  
  if (!Array.isArray(data)) {
    errors.push("Data must be an array");
    return { isValid: false, errors };
  }
  
  if (data.length < 1 || data.length > 6) {
    errors.push("Must have between 1 and 6 categories");
  }
  
  data.forEach((category, categoryIndex) => {
    if (!category.category || typeof category.category !== 'string') {
      errors.push(`Category ${categoryIndex + 1}: Missing or invalid category name`);
    }
    
    if (category.category && category.category.length > 20) {
      errors.push(`Category ${categoryIndex + 1}: Category name too long (max 20 characters)`);
    }
    
    if (!Array.isArray(category.clues) || category.clues.length !== 5) {
      errors.push(`Category ${categoryIndex + 1}: Must have exactly 5 clues`);
    } else {
      const expectedValues = [100, 200, 300, 400, 500];
      category.clues.forEach((clue, clueIndex) => {
        if (clue.value !== expectedValues[clueIndex]) {
          errors.push(`Category ${categoryIndex + 1}, Clue ${clueIndex + 1}: Value must be ${expectedValues[clueIndex]}`);
        }
        
        if (!clue.question || typeof clue.question !== 'string') {
          errors.push(`Category ${categoryIndex + 1}, Clue ${clueIndex + 1}: Missing or invalid question`);
        }
        
        if (!clue.answer || typeof clue.answer !== 'string') {
          errors.push(`Category ${categoryIndex + 1}, Clue ${clueIndex + 1}: Missing or invalid answer`);
        }
        
        if (clue.answer && !clue.answer.toLowerCase().startsWith('what is') && !clue.answer.toLowerCase().startsWith('what are')) {
          errors.push(`Category ${categoryIndex + 1}, Clue ${clueIndex + 1}: Answer should start with "What is" or "What are"`);
        }
      });
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Creates a simple text-based template that someone can fill out
 * @returns {string} - A formatted template string
 */
export function generateTextTemplate() {
  return `
JEOPARDY QUESTION TEMPLATE
=========================

Instructions:
- Fill in 4 categories with 5 questions each
- Questions should be statements (like Jeopardy clues)
- Answers should start with "What is..." or "What are..."
- Keep category names short (under 20 characters)

CATEGORY 1: [Your Category Name]
--------------------------------
$100: [Your clue here]
Answer: What is [your answer]?

$200: [Your clue here]
Answer: What is [your answer]?

$300: [Your clue here]
Answer: What is [your answer]?

$400: [Your clue here]
Answer: What is [your answer]?

$500: [Your clue here]
Answer: What is [your answer]?

CATEGORY 2: [Your Category Name]
--------------------------------
$100: [Your clue here]
Answer: What is [your answer]?

$200: [Your clue here]
Answer: What is [your answer]?

$300: [Your clue here]
Answer: What is [your answer]?

$400: [Your clue here]
Answer: What is [your answer]?

$500: [Your clue here]
Answer: What is [your answer]?

CATEGORY 3: [Your Category Name]
--------------------------------
$100: [Your clue here]
Answer: What is [your answer]?

$200: [Your clue here]
Answer: What is [your answer]?

$300: [Your clue here]
Answer: What is [your answer]?

$400: [Your clue here]
Answer: What is [your answer]?

$500: [Your clue here]
Answer: What is [your answer]?

CATEGORY 4: [Your Category Name]
--------------------------------
$100: [Your clue here]
Answer: What is [your answer]?

$200: [Your clue here]
Answer: What is [your answer]?

$300: [Your clue here]
Answer: What is [your answer]?

$400: [Your clue here]
Answer: What is [your answer]?

$500: [Your clue here]
Answer: What is [your answer]?
`;
}

/**
 * Parses a filled-out text template and converts it to jeopardyData format
 * This is a basic parser - could be enhanced for more robust parsing
 * @param {string} textTemplate - The filled template text
 * @returns {Array} - Parsed jeopardy data array
 */
export function parseTextTemplate(textTemplate) {
  // This is a simplified parser - you could make it more robust
  const lines = textTemplate.split('\n').filter(line => line.trim());
  const categories = [];
  let currentCategory = null;
  
  lines.forEach(line => {
    line = line.trim();
    
    // Check for category header
    if (line.startsWith('CATEGORY') && line.includes(':')) {
      if (currentCategory) {
        categories.push(currentCategory);
      }
      const categoryName = line.split(':')[1].trim().replace(/\[|\]/g, '');
      currentCategory = {
        category: categoryName,
        clues: []
      };
    }
    
    // Check for clue lines ($100, $200, etc.)
    const valueMatch = line.match(/^\$(\d+):\s*(.+)/);
    if (valueMatch && currentCategory) {
      const value = parseInt(valueMatch[1]);
      const question = valueMatch[2].replace(/\[|\]/g, '');
      currentCategory.clues.push({
        value,
        question,
        answer: "" // Will be filled in next line
      });
    }
    
    // Check for answer lines
    if (line.startsWith('Answer:') && currentCategory && currentCategory.clues.length > 0) {
      const answer = line.replace('Answer:', '').trim().replace(/\[|\]/g, '');
      currentCategory.clues[currentCategory.clues.length - 1].answer = answer;
    }
  });
  
  if (currentCategory) {
    categories.push(currentCategory);
  }
  
  return categories;
}
