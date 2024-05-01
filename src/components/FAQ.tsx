import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";

export default function FAQ() {
  return (
    <div className='h-screen w-full '>
      <h1 className=' mb-10 text-center text-8xl'>FAQ</h1>
      <div className='mx-32 flex flex-row items-center '>
        <Accordian />
      </div>
    </div>
  );
}

const Accordian = () => {
  return (
    <Accordion type='single' collapsible className='w-full text-2xl'>
      <div id="hello"><h1 className="text-3xl font-bold">Hello world</h1></div>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          What devices are compatible with the Indoor Navigation AR App?
        </AccordionTrigger>
        <AccordionContent>
          The app is designed to work on a range of modern smartphones and
          tablets equipped with advanced cameras, sensors, and AR capabilities.
          Check the app&apos;s specifications or website for a list of compatible
          devices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>
          Do I need an internet connection for the app to work?
        </AccordionTrigger>
        <AccordionContent>
          The app requires an initial internet connection to download and update
          indoor maps. However, once the maps are downloaded, the app can
          function in offline mode for navigation, utilizing the onboard VPS
          technology.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>
          How accurate is the indoor navigation using VPS?
        </AccordionTrigger>
        <AccordionContent>
          VPS technology provides a high level of accuracy, typically within a
          few meters. The accuracy can vary based on factors like the quality of
                the device&apos;s camera, environmental conditions, and the availability of
                visual features in the indoor space.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
            <AccordionTrigger>
                Can I use the app in any indoor location?
            </AccordionTrigger>
            <AccordionContent>
                The app is most effective in locations where detailed indoor maps are
                available and where the visual positioning system can identify
                distinct features. It&apos;s commonly used in shopping malls, airports,
          museums, and other large indoor spaces.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
