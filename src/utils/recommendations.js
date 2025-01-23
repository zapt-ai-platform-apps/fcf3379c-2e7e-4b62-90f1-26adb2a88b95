export function generateRecommendations(answers) {
  const scores = {};
  answers.forEach(answer => {
    answer.traits.forEach(trait => {
      scores[trait] = (scores[trait] || 0) + 1;
    });
  });

  const sortedTraits = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([trait]) => trait);

  return [
    {
      title: 'Software Developer',
      description: 'Creative problem-solver who enjoys logical challenges',
      reasons: ['Strong analytical skills', 'Attention to detail', 'Loves problem-solving']
    },
    {
      title: 'Graphic Designer',
      description: 'Visual thinker with passion for aesthetics',
      reasons: ['Creative mindset', 'Good color sense', 'Attention to visual details']
    }
  ];
}