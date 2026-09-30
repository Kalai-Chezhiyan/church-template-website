import React from "react";

export default function Login() {
  return (
    <section className="w-full py-24 px-6 bg-warmWhite">
      <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-heading text-primary mb-2">Member Login</h2>
          <p className="text-gray-500 font-body text-sm">Access your spiritual growth portal</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg active:scale-95">
            Sign In
          </button>
          <div className="text-center">
            <a href="#" className="text-xs text-accent hover:underline font-medium">Forgot password?</a>
          </div>
        </form>
      </div>
    </section>
  );
}
