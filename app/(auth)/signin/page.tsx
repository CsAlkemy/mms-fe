import MmsButton from "@/components/shared/mms-button";

export const metadata = {
  title: 'Sign In - Makers Media Source',
  description: 'Page description',
}

import Link from 'next/link'
import AuthHeader from '../auth-header'
import AuthImage from '../auth-image'

export default function SignIn() {
  return (
    <main className="bg-white dark:bg-slate-900">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <AuthHeader />

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Welcome to MMS</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" className="form-input w-full" type="password" autoComplete="on" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" href="/reset-password">Forgot Password?</Link>
                  </div>
                  <MmsButton label="Sign in" />
                </div>
              </form>
              {/* Footer */}
              {/*<div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">*/}
              {/*  <div className="text-sm">*/}
              {/*    Don't you have an account? <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/signup">Sign Up</Link>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

          </div>
        </div>

        <AuthImage />

      </div>

    </main>
  )
}
