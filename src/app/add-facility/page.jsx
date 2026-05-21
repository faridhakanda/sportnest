"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const AddFacility = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    
    // facility_name: facility?.facility_name,
    //     facility_type: facility?.facility_type,
    //     facility_image: facility?.facility_image,
    //     facility_location: facility?.facility_location,
    //     facility_price_per_hour: facility?.facility_price_per_hour,
    //     facility_capacity: facility?.facility_capacity,
    //     facility_available_slot: facility?.facility_available_slot,
    //     facility_description: facility?.facility_description
    console.log("user facility added data: ", facility);
    const { data: tokenData } = await authClient.token()
    const session = await authClient.getSession();
    const user = session?.data?.user;// || "Anonymous";
    const userName = user?.name;
    const userEmail = user?.email;
    console.log(session, 'session data in add facility page!');
    const addFacility = {
        ...facility,
        userName: userName,
        userEmail: userEmail,
    }
    console.log('add facility payload: ', addFacility);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(addFacility)
    });
    const data = await res.json();
    if (data) {
        toast.success('Added Facility successfully!');
        redirect('/');
    }
    if (error) {
        toast.error('Not added facility. try again!')
    }
  };
  
  return (
    <div className="mx-auto  my-4 px-2     max-w-sm sm:min-w-lg md:w-lg ">
      <div className="border-1 mx-1 my-1 px-2  rounded-md border-slate-100 shadow-sm">
        <Form
          className="flex my-auto px-2 pt-4 pb-1  flex-col gap-4"
          onSubmit={onSubmit}
        >

        <TextField
            isRequired
            name="facility_name"
            type="text"
          >
            <Label>Facility Name</Label>
            <Input placeholder="Enter facility name" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="facility_type"
            type="text"
          >
            <Label>Facility Type</Label>
            <Input placeholder="Enter facility type" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="facility_image"
            type="text"
            
          >
            <Label>Photo Url</Label>
            <Input placeholder="Enter facility image url" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="facility_location"
            type="text"
          >
            <Label>Facility Location</Label>
            <Input placeholder="Enter facility location" />
            <FieldError />
          </TextField>
          
          <TextField
            isRequired
            name="facility_price_per_hour"
            type="text"
            
          >
            <Label>Facility Price $/ph</Label>
            <Input placeholder="Enter facility price $/ph" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="facility_capacity"
            type="text"
            
          >
            <Label>Facility Capacity</Label>
            <Input placeholder="Enter facility capacity" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="facility_available_slot"
            type="text"
            
          >
            <Label>Facility Available Slot</Label>
            <Input placeholder="Enter available slot" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="facility_description"
            type="text"
            
          >
            <Label>Facility Description</Label>
            <Input placeholder="Enter facility description" />
            <FieldError />
          </TextField>
          
          <div className="flex gap-2 mt-1 mb-3">
            <Button className={" w-full font-bold text-xl rounded-md"} type="submit">
              Add Facility
            </Button>
          </div>
        </Form>
        
        
      </div>
    </div>
  );
};

export default AddFacility;
