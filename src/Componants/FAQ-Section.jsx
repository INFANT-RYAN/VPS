import FaqAccordion from "./faqAccordion"; 
const faqs = [ 
    { 
        question: "What is this website about?", 
        answer: "Our website is dedicated to providing users with information and resources on [insert topic]. Whether you're a beginner or an expert, you'll find valuable content that helps you learn and grow." 
    }, 
    { 
        question: "How do I create an account?",
        answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in the required information, and you'll be ready to access all the features of our site." 
    }, 
    { 
        question: "What is this website about?", 
        answer: "Our website is dedicated to providing users with information and resources on [insert topic]. Whether you're a beginner or an expert, you'll find valuable content that helps you learn and grow." 
    }, 
    { 
        question: "How do I create an account?",
        answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in the required information, and you'll be ready to access all the features of our site." 
    }, 
    { 
        question: "What is this website about?", 
        answer: "Our website is dedicated to providing users with information and resources on [insert topic]. Whether you're a beginner or an expert, you'll find valuable content that helps you learn and grow." 
    }, 
    { 
        question: "How do I create an account?", 
        answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in the required information, and you'll be ready to access all the features of our site." 
    }, 
    { 
        question: "What is this website about?", 
        answer: "Our website is dedicated to providing users with information and resources on [insert topic]. Whether you're a beginner or an expert, you'll find valuable content that helps you learn and grow." 
    }, 
    { 
        question: "How do I create an account?", 
        answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in the required information, and you'll be ready to access all the features of our site." 
    }, 
    { 
        question: "What is this website about?", 
        answer: "Our website is dedicated to providing users with information and resources on [insert topic]. Whether you're a beginner or an expert, you'll find valuable content that helps you learn and grow." 
    }, 
    { 
        question: "How do I create an account?", 
        answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in the required information, and you'll be ready to access all the features of our site." 
    } 
]; 
export default function FAQ(){ 
    return( 
    <section className="pt-10"> 
    <center className="space-y-4"> 
        <h1 className="text-[#9874f2] text-sm font-Tb font-semibold">FAQ</h1> 
        <h2 className="text-3xl font-semibold ">Talk About <strong>Question ?</strong></h2>
    </center> 
    <div className="px-14 mx-auto p-4 grid grid-rows-5 grid-flow-col overflow-hidden min-h-0 min-w-0 w-3/4 "> 
    {faqs.map((faq) => ( 
        <FaqAccordion className="w-[200px]" question={faq.question} answer={faq.answer} /> 
    ))
    } 
    </div> 
    </section> 
    ); 
}