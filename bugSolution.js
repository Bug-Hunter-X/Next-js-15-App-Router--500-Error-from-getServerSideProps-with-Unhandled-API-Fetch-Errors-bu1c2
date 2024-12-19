```javascript
import { NextResponse } from 'next/server';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      // Handle non-200 responses
      console.error('API Error:', res.status, res.statusText);
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
    const data = await res.json();
    return NextResponse.json({ props: { data } });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
```