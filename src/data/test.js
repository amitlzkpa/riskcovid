export default {
  callToAction: 'Estimate your risk exposure to COVID-19',
  launchButton: "Start",
  formId: 'registration',
  questions: [
    {
      key: "age",
      question: "Please tell us how old are you?",
      type: "number"
    },
    {
      key: "sex",
      question: 'What gender do you identify with?',
      type: "single-select",
      answers: [
        {
          answer: 'Male',
          action: 'continue',
          key: 'M'
        },
        {
          answer: 'Female',
          action: 'continue',
          key: 'F'
        },
        {
          answer: 'Other',
          action: 'continue',
          key: 'O'
        }
      ],
    },
    {
      key: "country",
      question: "Which country are you living in?",
      type: "text"
    },

    {
      id: 'thank-you',
      question: 'Great! Please click submit and wait for the results.',
      type: 'submit',
    }
  ]
};
