export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    // upload the file

  }

  // console.log(data)
  return Response.json(true);
}
