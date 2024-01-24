import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PcBuild = () => {
  const [processor, setProcessor] = useState({ item: "", price: 0 });
  const [motherboard, setMotherboard] = useState({ item: "", price: 0 });
  const [ram, setRam] = useState({ item: "", price: 0 });
  const [ssd, setSsd] = useState({ item: "", price: 0 });
  const [hdd, setHdd] = useState({ item: "", price: 0 });
  const [gpu, setGpu] = useState({ item: "", price: 0 });
  const [selectedCase, setSelectedCase] = useState({
    item: "",
    price: 0,
    image: "/case.webp",
  });
  const [psu, setPsu] = useState({ item: "", price: 0 });
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const customCheck = router.asPath.includes("Custom");

  useEffect(() => {
    setTotal(
      processor.price +
        motherboard.price +
        ram.price +
        ssd.price +
        hdd.price +
        gpu.price +
        selectedCase.price +
        psu.price
    );
  }, [processor, motherboard, ram, ssd, hdd, gpu, selectedCase, psu]);

  const processorList = [
    { item: "Core i5 13600KF", price: 80000 },
    { item: "Core i7 13700KF", price: 90000 },
    { item: "Core i9 13900KF", price: 100000 },
  ];

  const motherboardList = [
    { item: "Gigabyte B450m", price: 60000 },
    { item: "Msi B440 Tomahawk", price: 80000 },
  ];

  const ramList = [
    { item: "Corsair DDR4 3200Mhz", price: 10000 },
    { item: "Corsair DDR5 6000Mhz", price: 30000 },
  ];

  const ssdList = [
    { item: "Gigabyte 128gb m2", price: 7000 },
    { item: "Samsung 256gb m2", price: 10000 },
  ];

  const hddList = [
    { item: "Seagate 500gb", price: 7000 },
    { item: "Seagate 1tb", price: 15000 },
  ];

  const gpuList = [
    { item: "Rtx 4070", price: 200000 },
    { item: "Rtx 4080", price: 300000 },
  ];

  const caseList = [
    { item: "Nzxt h510", price: 15000, image: "/nzxt.jpg" },
    { item: "Nzxt S310", price: 20000, image: "/nzxt2.jpg" },
    { item: "Nzxt 200R", price: 25000, image: "/nzxt3.jpeg" },
  ];

  const psuList = [
    { item: "Corsair Rmx 850w", price: 20000 },
    { item: "Xpg Core Reactor 850w", price: 30000 },
  ];

  return (
    <Grid container sx={{ mt: "150px" }}>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "center", position: "sticky" }}
      >
        <Image
          src={selectedCase.image || "/case.webp"}
          alt="case"
          height={550}
          width={500}
          style={{ position: "sticky" }}
        />
      </Grid>
      <Grid item xs={5}>
        <FormControl fullWidth>
          <InputLabel>Processor</InputLabel>
          <Select
            label="Processor"
            value={processor}
            onChange={(event) => setProcessor(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/corei5.jpg" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {processorList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/corei5.jpg" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth>
          <InputLabel>Motherboard</InputLabel>
          <Select
            label="Motherboard"
            value={motherboard}
            onChange={(event) => setMotherboard(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/motherboard.jpg" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {motherboardList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/motherboard.jpg" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        {customCheck && (
          <FormControl fullWidth>
            <InputLabel>Case</InputLabel>
            <Select
              label="Case"
              value={selectedCase}
              onChange={(event) => setSelectedCase(event.target.value)}
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Image src={selected.image} height={40} width={40} />
                  <Box>
                    <Typography variant="body1">{selected.item}</Typography>
                    <Typography variant="body2" sx={{ color: "darkred" }}>
                      Rs {selected.price}
                    </Typography>
                  </Box>
                </Box>
              )}
            >
              {caseList.map((value) => (
                <MenuItem key={value.item} value={value}>
                  <Image src={value.image} height={30} width={30} />
                  <Box>
                    <Typography variant="body1">{value.item}</Typography>
                    <Typography variant="body2" sx={{ color: "darkred" }}>
                      Rs {value.price}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth>
          <InputLabel>Ram</InputLabel>
          <Select
            label="Ram"
            value={ram}
            onChange={(event) => setRam(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/ram.png" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {ramList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/ram.png" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth>
          <InputLabel>SSD</InputLabel>
          <Select
            label="SSD"
            value={ssd}
            onChange={(event) => setSsd(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/ssd.jpg" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {ssdList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/ssd.jpg" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth>
          <InputLabel>HDD</InputLabel>
          <Select
            label="HDD"
            value={hdd}
            onChange={(event) => setHdd(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/hdd.jpg" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {hddList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/hdd.jpg" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth>
          <InputLabel>Graphic Card</InputLabel>
          <Select
            label="Graphic Card"
            value={gpu}
            onChange={(event) => setGpu(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/gpu.webp" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {gpuList.map((value) => (
              <MenuItem key={value.item} value={value}>
                <Image src="/gpu.webp" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="horizontal" sx={{ mb: 2, mt: 2 }} />
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Power Supply</InputLabel>
          <Select
            label="Power Supply"
            value={psu}
            onChange={(event) => setPsu(event.target.value)}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image src="/psu.jpg" height={40} width={40} />
                <Box>
                  <Typography variant="body1">{selected.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {selected.price}
                  </Typography>
                </Box>
              </Box>
            )}
          >
            {psuList.map((value) => (
              <MenuItem key={value} value={value}>
                <Image src="/psu.jpg" height={30} width={30} />
                <Box>
                  <Typography variant="body1">{value.item}</Typography>
                  <Typography variant="body2" sx={{ color: "darkred" }}>
                    Rs {value.price}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" component="span" fontWeight={600}>
          Total Price:
        </Typography>
        <Typography
          variant="h5"
          component="span"
          fontWeight={600}
          sx={{ color: "darkred", ml: 1 }}
        >
          {total} Rs
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PcBuild;
