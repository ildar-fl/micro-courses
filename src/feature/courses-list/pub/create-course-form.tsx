'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { createCourseAction } from '@/feature/courses-list/actions';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/ui/utils';

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  className?: string;
  revalidatePagePath: string;
}) {
  const [isCreatingCourse, startCreatingCourseTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const handleSubmit = (data: CreateCourseListElementCommand) => {
    startCreatingCourseTransition(async () => {
      await createCourseAction(data, revalidatePagePath);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(className, 'space-y-8')}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Input name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description project</FormLabel>
              <FormControl>
                <Textarea placeholder='Input description ' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isCreatingCourse}>
          Add course
        </Button>
      </form>
    </Form>
  );
}
