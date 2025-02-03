import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { Provider } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SocialAuthProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const SocialAuth = ({ loading, setLoading }: SocialAuthProps) => {
  const { toast } = useToast();

  const handleSocialLogin = async (provider: Provider) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 mb-6">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocialLogin("google")}
        disabled={loading}
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-4 h-4 mr-2"
        />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocialLogin("facebook")}
        disabled={loading}
      >
        <Facebook className="w-4 h-4 mr-2" />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default SocialAuth;