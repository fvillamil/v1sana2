
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingMetadata {
  groundingChunks?: Array<{
    web?: {
      uri: string;
      title: string;
    };
  }>;
}
