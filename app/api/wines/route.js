import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const wines = await prisma.wine.findMany();
    return new Response(JSON.stringify(wines), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const wine = await prisma.wine.create({
      data: data,
    });
    return new Response(JSON.stringify(wine), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
