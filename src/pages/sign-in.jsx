import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="w-full lg:w-3/5 mt-24"></div>
      <div className="text-center">
        <a href="https://vite.dev" target="_blank">
           <img src={logo} className="flex justify-center mx-auto w-50" alt="Vite logo" />
        </a>
        <Typography variant="h2" className="font-bold mb-4">
          Sign In
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-lg font-normal"
        >
          Enter your email and password to Sign In.
        </Typography>
      </div>
      <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="small"
            color="blue-gray"
            className="-mb-3 font-medium"
          >
            Your email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="small"
            color="blue-gray"
            className="-mb-3 font-medium"
          >
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <span className="flex items-center gap-2">
              I agree
              <a
                href="#"
                className="font-normal text-black transition-colors hover:text-gray-900 underline"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                Terms and Conditions
              </a>
            </span>
          }
          containerProps={{ className: "flex items-center -ml-2.5" }}
        />

        <Button className="mt-10 bg-black w-50 mx-auto" fullWidth>
          Sign In
        </Button>

        <Button
          className="mt-2 bg-black w-50 mx-auto block"
          onClick={() => navigate("/alguma-rota")}
        >
          Botão Sign In
        </Button>
      </form>
    </section>
  );
}

export default SignIn;
