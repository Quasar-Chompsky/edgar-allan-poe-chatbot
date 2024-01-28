async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "When did Edgar Allan Poe die?." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();