import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function DELETE() {
  const imagePath = path.join(process.cwd(), 'public/downloads/heatmap-image.png');

  try {
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      return NextResponse.json({ success: true, message: 'Image deleted successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Image not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ success: false, message: 'Error deleting image' }, { status: 500 });
  }
}