
import { Typography } from "@material-tailwind/react";
import Container from "./layout/Container";
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
<Container>
<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Typography
                 as="a"
                 href="#"
                 className="text-2xl mr-4 ml-2 cursor-pointer text-primary py-1.5 font-semibold text-md"
               >
                 GODDU
               </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal font-Nunito transition-colors text-primary hover:text-teal-400 hover:font-md focus:text-primary"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal font-Nunito transition-colors text-primary hover:text-teal-400 hover:font-md focus:text-primary"
            >
              Contact
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal font-Nunito transition-colors text-primary hover:text-teal-400 hover:font-md focus:text-primary"
            >
              Map
            </Typography>
          </li>

        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; Dream your like
      </Typography>

</Container>
    </footer>
  );
}