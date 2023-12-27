import { ExpandMoreSharp } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import BadgeProvider from "../Badge/BadgeProvider";

/**
 * Properties for the AccordianProvider component.
 */
export interface IAccordianProviderProps {
  headingText: string;
  children: any;
  showBadge?: boolean;
  expanded?: boolean;
}

/**
 * Functional component for the AccordianProvider.
 *
 * @param props Properties for the AccordianProvider component
 * @returns AccordianProvider component
 */
export default function AccordionProvider(props: IAccordianProviderProps) {
  return (
    <Accordion className="w-full my:1 md:my-2" defaultExpanded={props.expanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreSharp />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {props.showBadge ? (
          <BadgeProvider
            badgeContent={"New"}
            position={{ vertical: "top", horizontal: "left" }}
          >
            <div className="flex flex-col justify-center md:m-4 m-1 w-full">
              <h1 className="md:text-2xl sm:text-lg text-sm font-bold">
                {props.headingText}
              </h1>
            </div>
          </BadgeProvider>
        ) : (
          <div className="flex flex-col justify-center md:m-4 m-1 w-full">
            <h1 className="md:text-2xl sm:text-lg text-sm font-bold overflow-hidden ">
              {props.headingText}
            </h1>
          </div>
        )}
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
}
