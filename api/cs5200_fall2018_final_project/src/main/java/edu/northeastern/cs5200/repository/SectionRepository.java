package edu.northeastern.cs5200.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.northeastern.cs5200.model.*;

public interface SectionRepository extends JpaRepository<Section, Integer>  {
	@Query("select section from Section section join section.schoolClass join section.schoolClass.school left join fetch section.professor where section.schoolClass.school.id=?1")
	public List<Section> findSectionsForSchool(int schoolId);
	
	@Query("select section from Section section left join fetch section.notes notes left join fetch section.enrollments enrollments left join fetch enrollments.questions questions where section.id=?1")
	public Section getSectionWithQuestions(int sectionId);
	
	@Query("select section from Section section left join section.schoolClass schoolClass left join schoolClass.school school left join section.professor professor where (locate(lower(?1), lower(professor.name)) > 0 or locate(lower(?1), lower(section.name)) > 0 or locate(lower(?1), lower(schoolClass.name)) > 0) and school.id=?2 and section.approved=1")
	public List<Section> getSectionsByName(String name, int schoolId);
	
	@Query("select section from Section section join section.enrollments enrollments join enrollments.id.student student where student.id=?1")
	public List<Section> findSectionsForStudent(int studentId);
	
	@Query("select section from Section section join section.professor professor where professor.id=?1")
	public List<Section> findSectionsForProfessor(int professorId);
}
