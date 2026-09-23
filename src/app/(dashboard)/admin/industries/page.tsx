export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Link from "next/link";

export default async function IndustriesPage() {
  const industries = await db.industry.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Industries</h1>
          <p className="text-muted-foreground">Manage website industries.</p>
        </div>
        <Button render={<Link href="/admin/industries/new" />}>
          Add Industry
        </Button>
      </div>

      <div className="border rounded-md bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {industries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No industries found.
                </TableCell>
              </TableRow>
            ) : (
              industries.map((industry: any) => (
                <TableRow key={industry.id}>
                  <TableCell className="font-medium">
                    {format(new Date(industry.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>{industry.title}</TableCell>
                  <TableCell>{industry.slug}</TableCell>
                  <TableCell>
                    <Badge variant={industry.isActive ? "default" : "secondary"}>
                      {industry.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" render={<Link href={`/admin/industries/${industry.id}/edit`} />}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
