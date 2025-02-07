import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/types/fleet";
import { useToast } from "@/components/ui/use-toast";

interface PriceCalculatorProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
  onBook: (distance: number) => void;
}

const PriceCalculator = ({ vehicle, isOpen, onClose, onBook }: PriceCalculatorProps) => {
  const [distance, setDistance] = useState("");
  const [additionalServices, setAdditionalServices] = useState({
    loading: false,
    unloading: false,
    packing: false,
    unpacking: false,
    furniture: false,
    appliances: false,
  });
  const { toast } = useToast();

  const calculatePrice = () => {
    const basePrice = parseInt(vehicle.pricing.baseRate.replace("₹", ""));
    const perKmRate = parseInt(vehicle.pricing.perKm.replace("₹", ""));
    const distanceNum = parseFloat(distance);
    
    if (isNaN(distanceNum)) {
      toast({
        title: "Invalid distance",
        description: "Please enter a valid distance",
        variant: "destructive",
      });
      return;
    }

    let totalPrice = basePrice + (distanceNum * perKmRate);
    
    // Add costs for additional services
    if (additionalServices.loading) totalPrice += 500;
    if (additionalServices.unloading) totalPrice += 500;
    if (additionalServices.packing) totalPrice += 1500;
    if (additionalServices.unpacking) totalPrice += 1000;
    if (additionalServices.furniture) totalPrice += 2000;
    if (additionalServices.appliances) totalPrice += 1500;

    toast({
      title: "Estimated Price",
      description: `Total cost: ₹${totalPrice}`,
    });

    onBook(distanceNum);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Calculate Price - {vehicle.type}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Distance (km)</label>
            <Input
              type="number"
              placeholder="Enter distance in kilometers"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Additional Services</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.loading}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    loading: e.target.checked
                  }))}
                />
                <span className="text-sm">Loading (₹500)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.unloading}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    unloading: e.target.checked
                  }))}
                />
                <span className="text-sm">Unloading (₹500)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.packing}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    packing: e.target.checked
                  }))}
                />
                <span className="text-sm">Packing (₹1500)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.unpacking}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    unpacking: e.target.checked
                  }))}
                />
                <span className="text-sm">Unpacking (₹1000)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.furniture}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    furniture: e.target.checked
                  }))}
                />
                <span className="text-sm">Furniture Assembly (₹2000)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additionalServices.appliances}
                  onChange={(e) => setAdditionalServices(prev => ({
                    ...prev,
                    appliances: e.target.checked
                  }))}
                />
                <span className="text-sm">Appliance Installation (₹1500)</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={calculatePrice}>
              Calculate
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriceCalculator;