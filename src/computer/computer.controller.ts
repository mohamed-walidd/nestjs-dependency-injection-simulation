import { Controller, Get, Body, Post } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(private cpuService: CpuService, private diskService: DiskService){

    }

    @Post()
    accessModules(@Body() body: {a: string, b:string}) {
        console.log(`numbers are ${body.a}, ${body.b}`);
        const sum = this.cpuService.compute(+body.a, +body.b);
        const result = this.diskService.getData();

        console.log(result);
        return sum;
    }
}
