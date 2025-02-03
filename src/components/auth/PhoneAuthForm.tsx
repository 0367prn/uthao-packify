import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PhoneAuthFormProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const PhoneAuthForm = ({ loading, setLoading }: PhoneAuthFormProps) => {
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handlePhoneAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        phone,
      });
      if (error) throw error;
      toast({
        title: "Success",
        description: "Please check your phone for the OTP.",
      });
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
    <form onSubmit={handlePhoneAuth} className="space-y-4 mb-6">
      <div className="space-y-1">
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="outline" className="w-full" disabled={loading}>
        {loading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          "Continue with Phone"
        )}
      </Button>
    </form>
  );
};

export default PhoneAuthForm;