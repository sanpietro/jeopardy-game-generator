// Jeopardy Question Set: Create Computer Vision Solutions with Azure AI
// Based on https://learn.microsoft.com/en-us/training/paths/create-computer-vision-solutions-azure-ai/

const templateData = [
  {
    category: "AI Vision 101",
    clues: [
      {
        value: 100,
        question: "This Azure service uses pre-trained models to analyze images and extract insights.",
        answer: "What is Azure AI Vision (Image Analysis)?"
      },
      {
        value: 200,
        question: "This capability extracts printed or handwritten text from images using the Image Analysis API.",
        answer: "What is OCR (the Read feature)?"
      },
      {
        value: 300,
        question: "Before calling the SDK or REST API, you first provision this resource in the Azure portal.",
        answer: "What is an Azure AI Vision resource?"
      },
      {
        value: 400,
        question: "You can call this API (or its client libraries) to tag images and return visual features.",
        answer: "What is the Image Analysis (Analyze Image) API?"
      },
      {
        value: 500,
        question: "For production workloads in Azure, this identity approach is recommended over embedding API keys.",
        answer: "What is Microsoft Entra ID with managed identities?"
      }
    ]
  },
  {
    category: "Faces & Video",
    clues: [
      {
        value: 100,
        question: "This service enables apps to detect human faces and analyze facial features and emotions.",
        answer: "What is Azure Face?"
      },
      {
        value: 200,
        question: "This service extracts insights from video, including face identification, text recognition, and scene segmentation.",
        answer: "What is Azure Video Indexer?"
      },
      {
        value: 300,
        question: "Identifying individuals in images or video by their facial characteristics is known as this task.",
        answer: "What is face recognition?"
      },
      {
        value: 400,
        question: "Among the insights Video Indexer can return are these boundaries that split content into logical parts.",
        answer: "What are scene segmentations?"
      },
      {
        value: 500,
        question: "When building apps that analyze people in images or video, you must apply this cross-cutting practice to mitigate risk.",
        answer: "What is Responsible AI?"
      }
    ]
  },
  {
    category: "GenAI & Images",
    clues: [
      {
        value: 100,
        question: "These multimodal models can interpret images to respond to visual prompts in chat applications.",
        answer: "What are vision-enabled generative AI models?"
      },
      {
        value: 200,
        question: "In Azure AI Foundry, you can create original pictures from natural language prompts using this technique.",
        answer: "What is image generation?"
      },
      {
        value: 300,
        question: "This module shows you how to build a chat application that understands images.",
        answer: "What is 'Develop a vision-enabled generative AI application'?"
      },
      {
        value: 400,
        question: "This Azure hub is where you configure, test, and deploy image generation and other foundation models.",
        answer: "What is Azure AI Foundry?"
      },
      {
        value: 500,
        question: "Pairing visual prompts with text prompts in a single conversation window is commonly called this.",
        answer: "What is multimodal prompting?"
      }
    ]
  },
  {
    category: "Custom Models",
    clues: [
      {
        value: 100,
        question: "This Azure service allows you to train custom image classification and object detection models.",
        answer: "What is Azure AI Custom Vision?"
      },
      {
        value: 200,
        question: "When you need to identify specific objects or brands unique to your business, you create this type of model.",
        answer: "What is a custom object detection model?"
      },
      {
        value: 300,
        question: "This process involves providing labeled training images to teach the model what to recognize.",
        answer: "What is supervised learning (or model training)?"
      },
      {
        value: 400,
        question: "After training a custom model, you publish it to this to make predictions on new images.",
        answer: "What is a prediction endpoint?"
      },
      {
        value: 500,
        question: "This metric tells you how well your custom model performs on a held-out test dataset.",
        answer: "What is model accuracy (or precision/recall)?"
      }
    ]
  },
  {
    category: "Document AI",
    clues: [
      {
        value: 100,
        question: "This Azure service extracts text and structure from documents using OCR and machine learning.",
        answer: "What is Azure AI Document Intelligence?"
      },
      {
        value: 200,
        question: "This prebuilt model can extract key information from invoices, receipts, and business cards.",
        answer: "What are prebuilt models?"
      },
      {
        value: 300,
        question: "When you need to extract data from custom document types, you create this type of model.",
        answer: "What is a custom extraction model?"
      },
      {
        value: 400,
        question: "This REST API endpoint allows you to analyze documents and extract structured data.",
        answer: "What is the Document Intelligence REST API?"
      },
      {
        value: 500,
        question: "This feature helps identify and extract tables, forms, and handwritten text from documents.",
        answer: "What is layout analysis?"
      }
    ]
  },
  {
    category: "AI Search",
    clues: [
      {
        value: 100,
        question: "This Azure service provides AI-powered search capabilities for applications.",
        answer: "What is Azure AI Search?"
      },
      {
        value: 200,
        question: "This process enriches your content with AI capabilities like OCR, translation, and key phrase extraction.",
        answer: "What is AI enrichment (or cognitive search)?"
      },
      {
        value: 300,
        question: "These are used to define how documents are processed and enriched during indexing.",
        answer: "What are skillsets?"
      },
      {
        value: 400,
        question: "This feature allows you to store and query vector representations of your content.",
        answer: "What is vector search?"
      },
      {
        value: 500,
        question: "This approach combines traditional keyword search with AI-powered semantic understanding.",
        answer: "What is hybrid search?"
      }
    ]
  }
];

export default templateData;