import { coursesRepository } from '@/feature/courses-list/courses.repository';
import { CourseItem } from '@/feature/courses-list/ui/course-item';
import { revalidatePath } from 'next/cache';

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDelete = async (courseId: string) => {
    'use server';

    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className='flex flex-col gap-3'>
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDelete.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
