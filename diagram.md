``` mermaid
flowchart TD
  %% Entry Point
  A[User visits Website]

  %% Upload Flow
  A --> B[Uploads WhatsApp Chat - txt file]
  B --> C[Backend Upload Handler]
  C --> D[Temporary Storage - Cloud or Local]

  %% Parsing & Analysis
  D --> E[Chat Parser Service]
  E --> F[Parsed Message Data]
  F --> G[Analytics Engine]
  G --> H[Computed Insights - e.g. Top Contacts, Emojis, Word Count]

  %% Optional AI Narrative
  H --> I[Optional GPT-based Summary Generator]
  I --> J[Narrative or Script Text]

  %% Storyboarding & Animation
  H --> K[Storyboard Generator]
  J --> K
  K --> L[Scene Data or Animation Script]

  %% Video Rendering
  L --> M[Video Renderer - Remotion or FFmpeg]
  M --> N[Generated MP4 or WebM Video]

  %% Output
  N --> O[Video Playback Component]
  O --> P[User Watches or Downloads Wrapped]

  %% External Storage
  M --> Q[Stores Video in Cloud - e.g. S3]

