"use client";

//import { Editfacility } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

export function MyFacilityEdit({ facility }) {
  //const {placeId} = placeId;
  const {
    
    // _id,
    facility_name,
    facility_type,
    facility_image, //: 'https://images.pexels.com/photos/36774665/pexels-photo-36774665.jpeg',
    facility_location, //: '34, Baseline Rd, London, UK',
    facility_price_per_hour, //: '20',
    facility_capacity, //: '50',
    facility_available_slot, //: '5',
    facility_description, //: 'Two players (singles) or four players (doubles) hit the shuttlecock over the net to the other side of the net. Only one stroke is allowed to get the shuttlecock over the net. A rally ends when the shuttlecock touches the ground, and the other side is given a point. ',
    userId, //: '6a0d2b3d13ea09f96969e9a8',
    // userName: 'Mirza Galib',
    // userEmail: 'mirza@gmail.com'



  } = facility;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facilityEdit = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facility/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(facilityEdit),
    });
    const data = await res.json();
    console.log(data, "edit place value!");
    redirect('/my-facility');
  };
  return (
    <Modal>
      <Button className={'rounded-md w-full font-bold text-white bg-cyan-500 md:w-96 mx-auto my-2'} variant="outline">
        <FiExternalLink />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="p-10 space-y-8  rounded-md "
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* facility Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={facility_name}
                        name="facility_name"
                        isRequired
                      >
                        <Label>Facility Name</Label>
                        <Input
                          placeholder="Enter facility name"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={facility_type} name="facility_type" isRequired>
                      <Label>Facility Type</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    

                    {/* Price */}
                    <TextField
                      defaultValue={facility_price_per_hour}
                      name="facility_price_per_hour"
                      type="text"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="text"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={facility_capacity}
                      name="facility_capacity"
                      isRequired
                    >
                      <Label>Facility Capacity</Label>
                      <Input
                        placeholder="7 "
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={facility_location}
                      name="facility_capacity"
                      isRequired
                    >
                      <Label>Facility Location</Label>
                      <Input
                        placeholder="Enter your location"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={facility_available_slot}
                        name="facility_available_slot"
                        type="text"
                        isRequired
                      >
                        <Label>Facility Available Slot</Label>
                        <Input type="text" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={facility_image}
                        name="facility_image"
                        isRequired
                      >
                        <Label>Photo URL</Label>
                        <Input
                          type="text"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={facility_description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>
                  
                  <Modal.Footer>
                    <Button slot="close" type="submit">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
