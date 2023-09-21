import { NextResponse, type NextRequest } from 'next/server';

export const revalidate = 120;

export async function GET(request: NextRequest) {
  const formData = new FormData();
  formData.append('keyword', 'YSCN');
  formData.append('type', 'search');
  formData.append('page', 'TAF');

  const res = await fetch('http://www.bom.gov.au/aviation/php/process.php', {
    method: 'POST',
    body: formData,
  });
  const data = await res.text();

  return NextResponse.json({ response_text: data });
}
