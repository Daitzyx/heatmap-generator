import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const { imageData, fileName } = await req.json();

    if (!imageData || !fileName) {
      return NextResponse.json({ error: 'Missing image data or filename' }, { status: 400 });
    }

    const base64Data = imageData.replace(/^data:image\/png;base64,/, "");

    const downloadsDir = path.join(process.cwd(), 'public/downloads');

    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    const filePath = path.join(downloadsDir, fileName);

    fs.writeFileSync(filePath, base64Data, 'base64');

    return NextResponse.json({ message: 'Image saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json({ error: 'Error saving image' }, { status: 500 });
  }
}
