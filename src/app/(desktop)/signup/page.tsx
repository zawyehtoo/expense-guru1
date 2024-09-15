'use client';
import AuthLayout from "@/components/desktop/layout/AuthLayout";
import Lottie from "lottie-react";
import SignupImage from "@/lotties/desktop_signup_image.json";
import SignUpForm from "@/components/common/signUpForm";

export default function SignUp() {
    return (
        <AuthLayout
            image={
                <Lottie animationData={SignupImage} style={{ width: "600px", height: "600px" }} />}
        >
            <SignUpForm className="w-[80%]"/>
        </AuthLayout>
    )
}