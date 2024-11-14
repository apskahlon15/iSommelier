
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const wine = await prisma.wine.findUnique({
      where: { id },
    });

    if (!wine) {
        return NextResponse.json({ error: 'Wine not found' }, { status: 404 });
      }
  
    return NextResponse.json(wine, { status: 200 });
  } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const data = await req.json();

    const updatedWine = await prisma.wine.update({
      where: { id:id },
      data: data,
    });
    return NextResponse.json(updatedWine, { status: 200 });
  } catch (error) {
        console.error('Error updating wine:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    const deletedWine = await prisma.wine.delete({
      where: { id },
    });
    return NextResponse.json(deletedWine, { status: 200 } );
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
