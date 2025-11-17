import React from "react";
import { formatDate } from "../utils/dates";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <article className="bg-white p-4 rounded shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-sm">{note.title}</h3>
          <div className="text-xs text-slate-500 mt-1">
            {formatDate(note.createdAt)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="
              p-1.5 rounded transition
              hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700
            "
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>

          <button
            onClick={onDelete}
            className="
              p-1.5 rounded transition
              hover:bg-red-100 text-red-600 hover:text-red-700
            "
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700 line-clamp-3">
        {note.description}
      </p>

      {note._autoAdjusted ? (
        <div className="mt-3 text-xs text-amber-700">
          Title auto-adjusted to avoid duplicate.
        </div>
      ) : null}
    </article>
  );
}
