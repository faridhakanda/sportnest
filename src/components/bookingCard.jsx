"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ facility }) => {
  const {
    facility_name,
    facility_type,
    userName,
    userEmail,
    facility_description,
    facility_available_slot,
    facility_capacity,
    facility_image,
    facility_location,
    facility_price_per_hour,
  } = facility;
  
  const toDay = new Date();
  const [bookDate, setBookDate] = useState(toDay);

  const handleBooking = async () => {
    const { data: tokenData } = await authClient.token();
    // const session = await authClient.getSession({
    //     headers: await headers()
    // })
    const session = await authClient.getSession();
    const user = session?.data?.user;
    const userId = user?.id;
    const bookingData = {
      facility_name: facility_name,
      facility_type: facility_type,
      facility_image: facility_image,
      facility_location: facility_location,
      facility_price_per_hour: facility_price_per_hour,
      facility_capacity: facility_capacity,
      facility_available_slot: facility_available_slot,
      facility_description: facility_description,
      userName: userName,
      userEmail: userEmail,
      bookingUserId: userId,
      bookDate: new Date(bookDate),
    }; // = facility;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data) {
      toast.success("Added booking data successfully!");
      redirect("/");
    }
    if (error) {
      toast.error("Not added booking. Try again!");
    }
  };
  
  return (
    <div>
        <DateField 
            onChange={setBookDate}
            className={'w-[150px my-2'}
            name="date"
        >
            <Label>Booking Date</Label>
            <DateField.Group>
                <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
            </DateField.Group>

        </DateField>
      <Button
        onClick={handleBooking}
        className={"w-full rounded-md font-bold bg-cyan-600"}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingCard;
