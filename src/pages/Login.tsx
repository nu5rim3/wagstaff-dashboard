import { Link } from "react-router-dom"
import UserAuthForm from "@/components/forms/user-auth-form"
import logo from '../assets/react.svg'

export function Login() {

    return (
        <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
                <div className="absolute inset-0 dark:bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <img src={logo} />
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2 text-black dark:text-white">
                        <p className="text-lg">
                            &ldquo;This dashboard has saved me countless hours of work and
                            helped me deliver faster than ever
                            before.&rdquo;
                        </p>
                        <footer className="text-sm"></footer>
                    </blockquote>
                </div>
            </div>
            <div className="flex h-full items-center p-4 lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{' '}
                        <Link
                            to="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            to="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
