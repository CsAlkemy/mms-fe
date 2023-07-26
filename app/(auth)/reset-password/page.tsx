import MmsButton from "@/components/shared/mms-button";

export const metadata = {
  title: 'Reset Password - Makers Media Source',
  description: 'Page description',
}

import Link from 'next/link'
import AuthHeader from '../auth-header'
import AuthImage from '../auth-image'

export default function ResetPassword() {
  return (
    <main className="bg-white dark:bg-slate-900">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <AuthHeader />

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Reset your Password</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <MmsButton label="Send Reset Link" />
                </div>
              </form>
            </div>

          </div>
        </div>

        <AuthImage />

      </div>

    </main>
  )
}
