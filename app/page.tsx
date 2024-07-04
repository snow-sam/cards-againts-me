import Card from '@/components/Card'
import { Options } from "@/components/Options";



export default async function Home() {
  const cardsTexts = await fetch(`${process.env.BASE_URL}/arq.json`).then(req=>req.json())
  console.log(cardsTexts)
  return (
    <main className="w-full h-[100dvh] grid place-items-center bg-neutral-200 relative overflow-hidden">
      <Card text="Qual é o prazer secreto do Batman?" />
      <Options cardsTexts={cardsTexts.slice(0,10)}/>
    </main>
  );
}