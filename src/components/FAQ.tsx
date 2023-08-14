import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";

export default function FAQ() {
  return (
    <div className='h-screen w-full '>
      <h1 className="text-white text-center text-8xl mb-10">FAQ</h1>
<div className="mx-32 flex flex-row items-center ">
      <Accordian />
</div>
    </div>
  );
}

const Accordian = () => {
  return (
    <Accordion  type='single' collapsible className='w-full text-2xl'>
      <AccordionItem  value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent >
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
