"use client"

import {
    Drawer,
    DrawerContent,
    DrawerClose,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ArrowLeftRight, ArrowUp } from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useState } from "react"
import Card from "./Card"

type OptionsButtonProps = {
    children?: React.ReactNode
}

export const OptionsButton = ({children}: OptionsButtonProps) => {
    return (
        <div className="inline-block aspect-none absolute bottom-28 hover:bottom-32 duration-300 cursor-pointer left-[calc(50%_-_128px)]">
            <div className="w-[247px] h-[342px] bg-white aspect-none shadow-md rounded-2xl border border-[#9D9D9D] absolute" />
            <div className="w-[247px] h-[342px] bg-white aspect-none shadow-md rounded-2xl border border-[#9D9D9D] absolute -rotate-12" />
            <div className="w-[247px] h-[342px] bg-white aspect-none shadow-md rounded-2xl border border-[#9D9D9D] absolute rotate-6" />
            {children}
        </div>
    );
}

const CardOption = ({ text, setChosedCard }: { text: string, setChosedCard: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <div className=" w-full min-h-32 p-4 border border-neutral-200 relative">
            <DrawerClose>
                <button className="flex text-start" onClick={()=> setChosedCard(text)}>
                    <h4 className="font-semibold text-sm leading-tight">{text}</h4>
                </button>
            </DrawerClose>
            <Popover>
                <PopoverTrigger>
                    <ArrowLeftRight size={18} className="absolute bottom-4 right-4" />
                </PopoverTrigger>
                <PopoverContent className="w-fit">
                    <span className="text-sm">Trocar carta</span>
                </PopoverContent>
            </Popover>


        </div>
    )
}

type OptionsDrawerProps = {
    children: React.ReactNode,
    chosedCard: string
}

const OptionsDrawer = ({ children, chosedCard }: OptionsDrawerProps) => (
    <Drawer>
        <DrawerTrigger>
            <OptionsButton>
                {chosedCard && <Card className="bg-white flex text-black text-start text-balance absolute border border-[#969696] -bottom-60" text={chosedCard}/>}
            </OptionsButton>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Escolha sua resposta.</DrawerTitle>
                <DrawerDescription>Seja o mais criativo possivel.</DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="w-fit h-96 ">
                {children}
            </ScrollArea>
        </DrawerContent>
    </Drawer>
)

export const Options = ({ cardsTexts }: { cardsTexts: string[] }) => {
    const [chosedCard, setChosedCard] = useState("")
    return (
        <>
            <button className="absolute bg-white p-4 rounded-full border border-[#9D9D9D] shadow-md right-10">
                <ArrowUp size={20} />
            </button>
            <OptionsDrawer chosedCard={chosedCard}>
                <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4">
                    {cardsTexts.map((text, key) => (<CardOption key={key} text={text} setChosedCard={setChosedCard}/>))}
                </div>
            </OptionsDrawer>
        </>
    );
}
