import parseMetarStr from '@/utils/parse-metar';
import { NextResponse, type NextRequest } from 'next/server';

export const revalidate = 120;

export async function GET(request: NextRequest) {
  // TODO: get ICAO code from request, see if cleaner way to create form
  const formData = new FormData();
  formData.append('keyword', 'YSCN');
  formData.append('type', 'search');
  formData.append('page', 'TAF');

  const res = await fetch('http://www.bom.gov.au/aviation/php/process.php', {
    method: 'POST',
    body: formData,
  });
  const metarStr = await res.text();
  const metarObj = parseMetarStr(metarStr);

  return NextResponse.json({ response_text: metarObj });
}
