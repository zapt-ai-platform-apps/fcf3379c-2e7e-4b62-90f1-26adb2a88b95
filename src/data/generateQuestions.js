import { questionTemplates } from './templates.js';

export const generateQuestions = () => {
  const questions = [];
  let id = 1;

  while (questions.length < 50) {
    for (const template of questionTemplates) {
      for (const context of template.contexts) {
        if (questions.length >= 50) break;
        
        questions.push({
          text: template.baseText.replace('%', context),
          options: template.options.map(opt => ({
            ...opt,
            text: opt.text.replace(/\.$/, ` (${context})`)
          }))
        });
      }
    }
  }

  return questions.slice(0, 50);
};