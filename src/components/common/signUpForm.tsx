import { Label } from "@/components/ui/label"
import { Form, Formik } from "formik"
import { FormField } from "./formField";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";

import {
    SignUpUserType,
    signUpValidationFormSchema,
} from "@/validations/signup";
import { toFormikValidationSchema } from "zod-formik-adapter";


export default function SignUpForm({ className = "w-full" }: { className?: string }) {
    const handleSubmit = () =>{
        console.log("hellow orld")
    }
    return (
        <>
            <Formik
                validationSchema={toFormikValidationSchema(signUpValidationFormSchema)}
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={handleSubmit}
            >
                <Form className={className}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <FormField
                                name="username"
                                id="username"
                                placeholder="Scott.."
                                type="text"
                                as={Input}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <FormField
                                name="email"
                                id="email"
                                placeholder="name@gmail.com"
                                type="email"
                                as={Input}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <FormField
                                name="password"
                                id="password"
                                required
                                type="password"
                                as={Input}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">ConfirmPassword</Label>
                            <FormField
                                name="confirmPassword"
                                id="confirmPassword"
                                required
                                type="password"
                                as={Input}
                            />
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                            variant="gooeyLeft"
                        >
                            Sign up
                        </Button>
                        <Label className="text-center w-full flex justify-center">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary ml-2"
                            >
                                Login
                            </Link>
                        </Label>
                    </div>
                </Form>
            </Formik>

        </>
    )
}