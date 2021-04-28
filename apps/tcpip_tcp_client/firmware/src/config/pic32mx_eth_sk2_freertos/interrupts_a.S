/*******************************************************************************
  System Interrupts File

  Company:
    Microchip Technology Inc.

  File Name:
    interrupt_a.S

  Summary:
    Raw ISR definitions.

  Description:
    This file maps all the interrupt vectors to their corresponding
    implementations. If a particular module interrupt is used, then its ISR
    definition can be found in corresponding PLIB source file. If a module
    interrupt is not used, then its ISR implementation is mapped to dummy
    handler.
 *******************************************************************************/

// DOM-IGNORE-BEGIN
/*******************************************************************************
* Copyright (C) 2019 Microchip Technology Inc. and its subsidiaries.
*
* Subject to your compliance with these terms, you may use Microchip software
* and any derivatives exclusively with Microchip products. It is your
* responsibility to comply with third party license terms applicable to your
* use of third party software (including open source software) that may
* accompany Microchip software.
*
* THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER
* EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED
* WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A
* PARTICULAR PURPOSE.
*
* IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
* INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND
* WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS
* BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE
* FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN
* ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY,
* THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
 *******************************************************************************/
// DOM-IGNORE-END

// *****************************************************************************
// *****************************************************************************
// Section: Included Files
// *****************************************************************************
// *****************************************************************************

#include <xc.h>
#include "ISR_Support.h"

   .extern  CORE_TIMER_Handler

   .section .vector_0,code, keep
   .equ     __vector_dispatch_0, IntVectorCORE_TIMER_Handler
   .global  __vector_dispatch_0
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  IntVectorCORE_TIMER_Handler

IntVectorCORE_TIMER_Handler:
    la    $26,  _CORE_TIMER_Handler
    jr    $26
    nop
    .end    IntVectorCORE_TIMER_Handler

   .section .CORE_TIMER_Handler_vector_text, code, keep
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  _CORE_TIMER_Handler

_CORE_TIMER_Handler:
    portSAVE_CONTEXT
    la    s6,  CORE_TIMER_Handler
    jalr  s6
    nop
    portRESTORE_CONTEXT
    .end    _CORE_TIMER_Handler
   .extern  UART_2_Handler

   .section .vector_32,code, keep
   .equ     __vector_dispatch_32, IntVectorUART_2_Handler
   .global  __vector_dispatch_32
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  IntVectorUART_2_Handler

IntVectorUART_2_Handler:
    la    $26,  _UART_2_Handler
    jr    $26
    nop
    .end    IntVectorUART_2_Handler

   .section .UART_2_Handler_vector_text, code, keep
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  _UART_2_Handler

_UART_2_Handler:
    portSAVE_CONTEXT
    la    s6,  UART_2_Handler
    jalr  s6
    nop
    portRESTORE_CONTEXT
    .end    _UART_2_Handler
   .extern  ETH_Handler

   .section .vector_48,code, keep
   .equ     __vector_dispatch_48, IntVectorETH_Handler
   .global  __vector_dispatch_48
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  IntVectorETH_Handler

IntVectorETH_Handler:
    la    $26,  _ETH_Handler
    jr    $26
    nop
    .end    IntVectorETH_Handler

   .section .ETH_Handler_vector_text, code, keep
   .set     nomicromips
   .set     noreorder
   .set     nomips16
   .set     noat
   .ent  _ETH_Handler

_ETH_Handler:
    portSAVE_CONTEXT
    la    s6,  ETH_Handler
    jalr  s6
    nop
    portRESTORE_CONTEXT
    .end    _ETH_Handler

