import { NextResponse } from 'next/server';
// import { User } from '../../../types';

// Explicitly mark the route as static
export const dynamic = 'force-static';
export const revalidate = 0; // No revalidation, fully static

export async function GET() {
  // This would typically fetch from your Express.js API
  const data = {
    message: 'Data loaded successfully from Next.js API',
    data: [
      {
        id: 1,
        name: 'EastEnd Feature 1',
        description: 'Modern Next.js architecture',
      },
      {
        id: 2,
        name: 'EastEnd Feature 2',
        description: 'TypeScript integration',
      },
      {
        id: 3,
        name: 'EastEnd Feature 3',
        description: 'Framer Motion animations',
      },
      {
        id: 4,
        name: 'EastEnd Feature 4',
        description: 'Express.js API connectivity',
      },
    ],
  };

  return NextResponse.json(data);
}