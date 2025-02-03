import { useState } from "react";
import { motion } from "framer-motion";
import SocialAuth from "@/components/auth/SocialAuth";
import EmailAuthForm from "@/components/auth/EmailAuthForm";
import PhoneAuthForm from "@/components/auth/PhoneAuthForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <SocialAuth loading={loading} setLoading={setLoading} />

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <EmailAuthForm 
          isLogin={isLogin} 
          loading={loading} 
          setLoading={setLoading} 
        />

        <PhoneAuthForm loading={loading} setLoading={setLoading} />

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;