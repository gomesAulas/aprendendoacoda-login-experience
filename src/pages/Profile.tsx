import { motion } from "framer-motion";
import { User, Mail, BookOpen, Trophy, Clock, ArrowLeft, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AnimatedWaveBackground from "@/components/AnimatedWaveBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

// Mock data para demonstração
const mockUser = {
  name: "João Silva",
  email: "joao@email.com",
  avatar: null,
};

const mockCourses = [
  {
    id: 1,
    title: "JavaScript Fundamentos",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    status: "em_andamento",
  },
  {
    id: 2,
    title: "React do Zero ao Avançado",
    progress: 40,
    totalLessons: 32,
    completedLessons: 13,
    status: "em_andamento",
  },
  {
    id: 3,
    title: "HTML & CSS Básico",
    progress: 100,
    totalLessons: 16,
    completedLessons: 16,
    status: "concluido",
  },
  {
    id: 4,
    title: "TypeScript na Prática",
    progress: 20,
    totalLessons: 20,
    completedLessons: 4,
    status: "em_andamento",
  },
];

const Profile = () => {
  const inProgressCourses = mockCourses.filter((c) => c.status === "em_andamento");
  const completedCourses = mockCourses.filter((c) => c.status === "concluido");

  return (
    <div className="min-h-screen relative">
      <AnimatedWaveBackground />
      <ThemeToggle />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Link */}
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
              {mockUser.avatar ? (
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-primary" />
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {mockUser.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>{mockUser.email}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-2 mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{mockCourses.length}</div>
                <div className="text-xs text-muted-foreground">Cursos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-2 mx-auto">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">{completedCourses.length}</div>
                <div className="text-xs text-muted-foreground">Concluídos</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Courses in Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Em Andamento</h2>
          </div>

          <div className="space-y-4">
            {inProgressCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{course.title}</h3>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    {course.progress}%
                  </span>
                </div>
                <Progress value={course.progress} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">
                  {course.completedLessons} de {course.totalLessons} aulas concluídas
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Completed Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Cursos Concluídos</h2>
          </div>

          {completedCourses.length > 0 ? (
            <div className="space-y-4">
              {completedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-accent/10 border border-accent/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <Trophy className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{course.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {course.totalLessons} aulas concluídas
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      Concluído ✓
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Você ainda não concluiu nenhum curso.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
